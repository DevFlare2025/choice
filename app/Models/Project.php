<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';

    protected $table = 'tb_projects';

    protected $fillable =[
        'categoria_id',
        'nomeclatura',
        'proyecto',
        'responsable_id',
        'comunidad',
        'estado',
        'presupuesto',
        'presupuestoGastado',
        'fechaInicio',
        'fechaFin'
    ];
}
