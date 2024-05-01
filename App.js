import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import hotbackground from "./assets/hot.png";
import coldbackground from "./assets/cold.png";
import { Input } from "./components/Input/Input";
import { useEffect, useState } from "react";
import { DisplayTempreture } from "./components/DispalyTemprature/DisplayTempratrure";
import { convertTempratureTo, getOppositeUnits, isTempratureIncrease } from "./utils/temprature";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";
export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [currentBackground,setCurrentBackground]=useState(hotbackground)
  const oppositeUnits = getOppositeUnits(currentUnit);
  useEffect(()=>{
    const isCold=isTempratureIncrease(inputValue,currentUnit) 
    setCurrentBackground(isCold ? coldbackground : hotbackground)
  },[inputValue,currentUnit])
  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTempratureTo(inputValue, oppositeUnits).toFixed(1);
    }
  }
  return (
    <>
      <ImageBackground source={currentBackground} style={s.backgorundImg}>
        <SafeAreaProvider>
          <SafeAreaView style={s.root}>
            <View style={s.workspace}>
              <DisplayTempreture
                unit={oppositeUnits}
                temprature={getConvertedTemperature()}
              />
              <Input
                onChange={setInputValue}
                defaultValue={0}
                unit={currentUnit}
              />
              <ButtonConvert unit={currentUnit} onPress={()=>{
                setCurrentUnit(oppositeUnits)
              }}/>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}
