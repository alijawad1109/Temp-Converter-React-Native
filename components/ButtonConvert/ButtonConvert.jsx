import { Text, TouchableOpacity } from "react-native";
import {s} from './ButtonConvert.style'
export function ButtonConvert({unit,onPress}){
    return(
        <>
            <TouchableOpacity style={s.btn} onPress={onPress}>
            <Text style={s.btnText}>Convert To {unit}</Text>
            </TouchableOpacity>
        </>
    )
}