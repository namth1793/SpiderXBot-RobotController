Write-Host "Start setting up production code for CYOBot v2" -ForegroundColor Green

$port = Get-WMIObject Win32_SerialPort | where{$_.Description -like "Silicon*"} | Select-Object DeviceID, Description
Write-Host "Found $($port.DeviceID)"

Write-Host "Invoke cyobot conda environment" -ForegroundColor Green
Invoke-Expression "conda activate cyobot"

Write-Host "Erase flash of current board" -ForegroundColor Green
Invoke-Expression "esptool -p $($port.DeviceID) erase_flash"

$currentDir = Get-Location
$imageFileName = "micropython.bin"
$imageFilePath = Join-Path -Path $currentDir -ChildPath $imageFileName
if (Test-Path -Path $imageFilePath -PathType Leaf) {
    Write-Host "The file '$imageFileName' exists in the current directory." -ForegroundColor Green
} else {
    Write-Host "The file '$imageFileName' does not exist in the current directory." -ForegroundColor Red
    Exit 1
}

$imageFileName = "bootloader.bin"
$imageFilePath = Join-Path -Path $currentDir -ChildPath $imageFileName
if (Test-Path -Path $imageFilePath -PathType Leaf) {
    Write-Host "The file '$imageFileName' exists in the current directory." -ForegroundColor Green
} else {
    Write-Host "The file '$imageFileName' does not exist in the current directory." -ForegroundColor Red
    Exit 1
}

$imageFileName = "partition-table.bin"
$imageFilePath = Join-Path -Path $currentDir -ChildPath $imageFileName
if (Test-Path -Path $imageFilePath -PathType Leaf) {
    Write-Host "The file '$imageFileName' exists in the current directory." -ForegroundColor Green
} else {
    Write-Host "The file '$imageFileName' does not exist in the current directory." -ForegroundColor Red
    Exit 1
}

Write-Host "Upload CYOBot OS to the board" -ForegroundColor Green
Invoke-Expression "esptool -p $($port.DeviceID) -b 460800 --before default_reset --after hard_reset --chip esp32s3 write_flash --flash_mode dio --flash_size 4MB --flash_freq 80m 0x0 bootloader.bin 0x8000 partition-table.bin 0x10000 micropython.bin"

Write-Host "Done" -ForegroundColor Green