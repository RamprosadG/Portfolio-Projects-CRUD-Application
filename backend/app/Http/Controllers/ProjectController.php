<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->query('search');

        $projects = Project::when($query, function ($q) use ($query) {
            $q->where(function ($q) use ($query) {
                $q->whereRaw('LOWER(title) LIKE ?', ['%' . strtolower($query) . '%'])
                    ->orWhereRaw('LOWER(projectUrl) LIKE ?', ['%' . strtolower($query) . '%'])
                    ->orWhereRaw('LOWER(status) LIKE ?', ['%' . strtolower($query) . '%']);
            });
        })->get();

        return response()->json([
            'status_code' => 200,
            'message' => 'Projects fetched successfully',
            'data' => $projects
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'projectUrl' => 'nullable|string',
            'image' => 'required|string',
            'status' => 'required|in:draft,published',
        ]);

        $project = Project::create($validated);

        return response()->json([
            'message' => 'Project created successfully',
            'data' => $project
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'projectUrl' => 'nullable|string',
            'image' => 'required|string',
            'status' => 'required|in:draft,published',
        ]);

        $project = Project::find($id);

        if (!$project) {
            return response()->json([
                'message' => 'Project not found',
                'status' => 404
            ], 404);
        }

        $project->update($validated);

        return response()->json([
            'message' => 'Project updated successfully',
            'data' => $project,
            'status' => 200
        ], 200);
    }

    public function destroy($id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json([
                'message' => 'Project not found',
                'status' => 404
            ], 404);
        }

        $deletedProject = $project->toArray();
        $project->delete();

        return response()->json([
            'message' => 'Project deleted successfully',
            'data' => $deletedProject,
            'status' => 200
        ], 200);
    }
}
