<?php

namespace App\Http\Controllers\Api;

use App\Models\Project;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        $data = [
            'lista' => $projects,
            'status' => 200
        ];
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'categoria_id' => 'required',
            'nomeclatura' => 'required|max:30',
            'proyecto' => 'required|max:50',
            'responsable_id' => 'required',
            'comunidad' => 'required',
            'estado' => 'required',
            'presupuesto' => 'required',
            'presupuestoGastado' => 'required',
            'fechaInicio' => 'required',
            'fechaFin' => 'required',
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'error en la validacion de los datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        $project = Project::create([
            'categoria_id' => $request->categoria_id,
            'nomeclatura' => $request->nomeclatura,
            'proyecto' => $request->proyecto,
            'responsable_id' => $request->responsable_id,
            'comunidad' => $request->comunidad,
            'estado' => $request->estado,
            'presupuesto' => $request->presupuesto,
            'presupuestoGastado' => $request->presupuestoGastado,
            'fechaInicio' => $request->fechaInicio,
            'fechaFin' => $request->fechaFin
        ]);

        if (!$project) {
            $data = [
                'message' => 'Error al crear un proyecto',
                'status' => 500
            ];
        }

        $data = [
            'projects' => $project,
            'status' => 201
        ];
        return response()->json($data, 201);
    }

    public function show($id)
    {
        $project = Project::find($id);
        if (!$project) {
            $data = [
                'message' => 'projecto no encontrado',
                'status' => 404
            ];
            return response()->json($data, 404);
        }
        $data = [
            'project' => $project,
            'status' => 200
        ];
        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $project = Project::find($id);
        if (!$project) {
            $data = [
                "message" => 'Projecto no encontrado',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $project->delete();
        if ($project) {
            $data = [
                'message' => 'Projecto eliminado',
                'status' => 200
            ];
            return response()->json($data, 200);
        }
    }

    public function update(Request $request, $id)
    {
        $project = Project::find($id);

        if (!$project) {
            $data = [
                'message' => 'proyecto no encontrado',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $validator = Validator::make($request->all(), [
            'categoria_id' => 'required',
            'nomeclatura' => 'required|max:30',
            'proyecto' => 'required|max:50',
            'responsable_id' => 'required',
            'comunidad' => 'required',
            'estado' => 'required',
            'presupuesto' => 'required',
            'presupuestoGastado' => 'required',
            'fechaInicio' => 'required',
            'fechaFin' => 'required',
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'error en la validacion de los datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }
        $project->categoria_id = $request->categoria_id;
        $project->nomeclatura = $request->nomeclatura;
        $project->proyecto = $request->proyecto;
        $project->responsable_id = $request->responsable_id;
        $project->comunidad = $request->comunidad;
        $project->estado = $request->estado;
        $project->presupuesto = $request->presupuesto;
        $project->presupuestoGastado = $request->presupuestoGastado;
        $project->fechaInicio = $request->fechaInicio;
        $project->fechaFin = $request->fechaFin;
        $project->save();

        $data = [
            'message' => 'proyecto actualizado',
            'project' => $project,
            'status' => 202
        ];
        return response()->json($data, 202);
    }

    public function updatePartial(Request $request, $id)
    {
        $project = Project::find($id);
        if (!$project) {
            $data = [
                'message' => 'proyecto no encontrado',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $validator = Validator::make($request->all(), [
            'categoria_id' => 'nullable|integer',
            'nomeclatura' => 'nullable|max:30',
            'proyecto' => 'nullable|max:50',
            'responsable_id' => 'nullable|integer',
            'comunidad' => 'nullable|integer',
            'estado' => 'nullable|string',
            'presupuesto' => 'nullable|numeric',
            'presupuestoGastado' => 'nullable|numeric',
            'fechaInicio' => 'nullable|date_format:Y-m-d',
            'fechaFin' => 'nullable|date_format:Y-m-d',
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'error en la validacion de los datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        if ($request->has('categoria_id')) {
            $project->categoria_id = $request->categoria_id;
        }

        if ($request->has('nomeclatura')) {
            $project->nomeclatura = $request->nomeclatura;
        }

        if ($request->has('proyecto')) {
            $project->proyecto = $request->proyecto;
        }
        if ($request->has('responsable')) {
            $project->responsable_id = $request->responsable_id;
        }
        if ($request->has('comunidad')) {
            $project->comunidad = $request->comunidad;
        }
        if ($request->has('estado')) {
            $project->estado = $request->estado;
        }
        if ($request->has('presupuesto')) {
            $project->presupuesto = $request->presupuesto;
        }
        if ($request->has('presupuestoGastado')) {
            $project->presupuestoGastado = $request->presupuestoGastado;
        }
        if ($request->has('fechaInicio')) {
            $project->fechaInicio = $request->fechaInicio;
        }
        if ($request->has('fechaFin')) {
            $project->fechaFin = $request->fechaFin;
        }

        $project->save();

        $data = [
            'message' => 'proyecto actualizado',
            'project' => $project,
            'status' => 202
        ];
        return response()->json($data, 202);
    }
}
