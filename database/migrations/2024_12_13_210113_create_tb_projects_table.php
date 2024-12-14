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
            $table->id();
            $table->foreignId('categoria_id');
            $table->string('nomeclatura');
            $table->string('proyecto');
            $table->foreignId('responsable_id');
            $table->foreignId('comunidad');
            $table->string('estado');
            $table->decimal('presupuesto', 15, 2);
            $table->decimal('presupuestoGastado', 15, 2);
            $table->date('fechaInicio');
            $table->date('fechaFin');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_projects');
    }
};
