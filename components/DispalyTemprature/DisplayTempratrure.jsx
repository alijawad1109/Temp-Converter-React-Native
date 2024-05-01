import { Text } from "react-native";
import {s} from './DisplayTemparture.style'
export function DisplayTempreture({temprature,unit}){
    return (
        <>
            <Text style={s.tempratureText}>{temprature} {unit}</Text>
        </>
    )
}