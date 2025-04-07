Write-Host "Connect to board with RShell" -ForegroundColor Green

$port = Get-WMIObject Win32_SerialPort | where{$_.Description -like "Silicon*"} | Select-Object DeviceID, Description
Write-Host "Found $($port.DeviceID)"

Write-Host "Invoke cyobot conda environment" -ForegroundColor Green
Invoke-Expression "conda activate cyobot"

Write-Host "Connect to $($port.DeviceID)" -ForegroundColor Green
Invoke-Expression "rshell -p $($port.DeviceID) -b 115200"