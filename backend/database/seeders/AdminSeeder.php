<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create super admin
        Admin::create([
            'name' => 'Super Admin',
            'email' => 'admin@90echokana.com',
            'password' => Hash::make('admin123456'),
            'role' => 'super_admin',
            'email_verified_at' => now(),
        ]);
        
        // Create regular admin
        Admin::create([
            'name' => 'Content Manager',
            'email' => 'content@90echokana.com',
            'password' => Hash::make('content123456'),
            'role' => 'admin',
            'email_verified_at' => now(),
        ]);
    }
}
