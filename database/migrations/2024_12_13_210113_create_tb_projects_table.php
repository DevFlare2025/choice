<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tb_projects', function (Blueprint $table) {
            $table->id(); // Auto incremental ID
            $table->foreignId('categoria_id')->constrained('tb_categorias')->cascadeOnDelete(); // Relación con categorías
            $table->string('nomeclatura');
            $table->string('proyecto');
            $table->foreignId('responsable_id')->constrained('tb_users')->cascadeOnDelete(); // Relación con usuarios
            $table->string('estado');
            $table->decimal('presupuesto', 15, 2); // Para manejar dinero con precisión
            $table->decimal('presupuestoGastado', 15, 2); // Para manejar dinero con precisión
            $table->date('fechaInicio')->nullable(); // Usar `date` para fechas
            $table->date('fechaFin')->nullable();
            $table->timestamps(); // Campos created_at y updated_at
        });

        // Tabla pivote para la relación muchos a muchos entre proyectos y comunidades
        Schema::create('community_project', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained('tb_projects')->cascadeOnDelete();
            $table->foreignId('community_id')->constrained('tb_communities')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('community_project');
        Schema::dropIfExists('tb_projects');
    }
};
