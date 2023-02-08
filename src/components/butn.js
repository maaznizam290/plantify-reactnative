import {Text, TouchableOpacity} from 'react-native';

function Butn(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Text style={props.style2}>{props.text}</Text>
    </TouchableOpacity>
  );
}
export default Butn;
