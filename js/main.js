const distance = document.getElementById('distance') //R
const package = document.getElementById('package-length'); // L

const physical = document.getElementById('physical-link'); // d
const velocity = 3 * Math.pow(10, 8) // VelocityOfLight 

const btn = document.getElementById('btn')

btn.onclick = function(){
    
    const bitsDistance = convertToBits(distance.value)
    const bitsPackage = convertToBits(package.value)

    if(bitsDistance == 0 || bitsPackage == 0) {
        return alert('We need all informations.')
    } 

    const delayTransmission = parseFloat(bitsPackage) / parseFloat(bitsDistance);
    const propagationDelay = parseFloat(physical.value) / parseFloat(velocity);

    const minutes = converDelayTransmitionToMinutes(delayTransmission);

    alert("Atraso de transmissão: " + minutes + " Minutes" + "\nAtraso de propagação: " + propagationDelay + " Seconds");
}

function converDelayTransmitionToMinutes(value){
    const convertToMinute = value / 60;
    return convertToMinute;
}

function convertToBits(valueInMb) {
    const bitsInByte = 8; 
    const kilobytesInMb = 1024; 
    const bytesInMb = kilobytesInMb * 1024; 
    const bitsInMb = bytesInMb * bitsInByte; 

    const convertedToBits = valueInMb * bitsInMb;
    return convertedToBits;
}


