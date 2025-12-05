# Update all import paths to match new structure

Write-Host "Updating import paths across the application..." -ForegroundColor Cyan

# Get all .jsx files in app directory
$files = Get-ChildItem -Path "app" -Recurse -Filter "*.jsx"

foreach ($file in $files) {
    Write-Host "Processing: $($file.FullName)" -ForegroundColor Yellow
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Update component imports
    # From: ../../../src/app/core/components/common/ -> ../../src/components/
    $content = $content -replace 'from\s+[''"]\.\.\/\.\.\/\.\.\/src\/app\/core\/components\/common\/', "from '../../src/components/"
    
    # Update API imports
    # From: ../../../src/app/core/services/api -> ../../src/api/api
    $content = $content -replace 'from\s+[''"]\.\.\/\.\.\/\.\.\/src\/app\/core\/services\/api[''"]', "from '../../src/api/api'"
    $content = $content -replace 'from\s+[''"]\.\.\/src\/api[''"]', "from '../src/api/api'"
    
    # Update responsive imports
    # From: ../../../src/app/core/helpers/responsive -> ../../src/utils/responsive
    $content = $content -replace 'from\s+[''"]\.\.\/\.\.\/\.\.\/src\/app\/core\/helpers\/responsive[''"]', "from '../../src/utils/responsive'"
    $content = $content -replace 'from\s+[''"]\.\.\/src\/responsive[''"]', "from '../src/utils/responsive'"
    
    # Only write if content changed
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "  ✓ Updated" -ForegroundColor Green
    }
    else {
        Write-Host "  - No changes needed" -ForegroundColor Gray
    }
}

# Update styles.js files
$styleFiles = Get-ChildItem -Path "app" -Recurse -Filter "styles.js"

foreach ($file in $styleFiles) {
    Write-Host "Processing: $($file.FullName)" -ForegroundColor Yellow
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Update responsive imports in styles
    $content = $content -replace 'from\s+[''"]\.\.\/\.\.\/\.\.\/src\/app\/core\/helpers\/responsive[''"]', "from '../../../src/utils/responsive'"
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "  ✓ Updated" -ForegroundColor Green
    }
    else {
        Write-Host "  - No changes needed" -ForegroundColor Gray
    }
}

Write-Host "`nAll import paths updated!" -ForegroundColor Green
