function numPressed(num) {
    document.getElementById("clickAudio_1").play();
    if(flagNewNum){
        keyPad.readOut.value = num;
        flagNewNum = false;
    }
    else{
        if(keyPad.readOut.value == '0'){
            keyPad.readOut.value = num;
        }
        else{
            keyPad.readOut.value += num; //字串相加
        }
    }
}

