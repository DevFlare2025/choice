{
  description = "A multi-architecture flake for development environments";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      ...
    }@inputs:

    flake-utils.lib.eachSystem [ "x86_64-darwin" "aarch64-darwin" "x86_64-linux" "aarch64-linux" ] (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };

        mkScript =
          name: text:
          let
            script = pkgs.writeShellScriptBin name text;
          in
          script;

        scripts = [
          (mkScript "php-debug-adapter" ''
            #!/bin/bash
            node ${pkgs.vscode-extensions.xdebug.php-debug}/share/vscode/extensions/xdebug.php-debug/out/phpDebug.js
          '')

          (mkScript "all-format" ''
            #!/bin/bash
            prettier . --check --write && blade-formatter --write "resources/**/*.blade.php" && php-cs-fixer fix --show-progress=dots
          '')

          (mkScript "lara-start" ''
            #!/bin/bash
            trap "echo 'killing php service...'; kill 0" SIGINT
            php artisan serve --no-reload --host=0.0.0.0  &
            php artisan queue:listen --verbose &
            pnpm run dev &
            wait
          '')
        ];

        phpWithXdebug = (
          pkgs.php84.buildEnv {
            extensions = (
              { enabled, all }:
              enabled
              ++ (with all; [
                xdebug
              ])
            );
            extraConfig = ''
              xdebug.mode=debug
              xdebug.start_with_request=yes
              xdebug.client_host=127.0.0.1
              xdebug.client_port=9003
              xdebug.log_level = 0
            '';
          }
        );

        devPackages = with nixpkgs; [
          # base stuff
          phpWithXdebug
          pkgs.nodejs_22
          pkgs.pnpm
          pkgs.curl
          pkgs.zip
          pkgs.unzip
          # php packages
          pkgs.php84Packages.composer
          pkgs.php84Packages.php-cs-fixer
          # extensions
          pkgs.php84Extensions.intl
          pkgs.php84Extensions.bcmath
          pkgs.php84Extensions.curl
          pkgs.php84Extensions.mysqli
          pkgs.php84Extensions.xml
          pkgs.php84Extensions.zip
          pkgs.php84Extensions.soap
          pkgs.php84Extensions.mbstring
          pkgs.php84Extensions.gd
          pkgs.php84Extensions.ftp
          pkgs.php84Extensions.xdebug
          # development
          pkgs.intelephense
          pkgs.typescript-language-server
          pkgs.blade-formatter
          pkgs.nodePackages.prettier
          pkgs.vscode-extensions.xdebug.php-debug
        ];

        postShellHook = '''';
      in
      {
        devShells = {
          default = pkgs.mkShell {
            name = "choice";
            nativeBuildInputs = scripts;
            packages = devPackages;
            postShellHook = postShellHook;
          };
        };
      }
    );

}
