import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('');

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
  };

  const getColors = (light: string , dark :string) => {
    return darkTheme ? dark : light;
  };
  const getBtncolor=(type)=>{
    if (type=='top') {
      return '#35FBD6'
      
    }else if(type =='right'){
      return '#EB6363'
    }else{
      return getColors(colors.dark,colors.light)
    }
  }
  
  const calculate=(title :string)=>{
    if(title=='C'){
      setResult('')
    }else if(title=='DL'){
      setResult(result.substring(0,result.length-1));
    }else if(title=='='){
      const ans= Number(eval(result).toFixed(3)).toString()
      setResult(ans)
    }else{
      setResult(result+title)
    }
  }

  const Btn = ({title,type}) => {
    return (
      <TouchableOpacity
      onPress={()=>calculate(title)}
        style={{
          padding: 10,
          borderRadius: 10,
          elevation: 2,
          backgroundColor: getColors(colors.light1, colors.dark1),
          height: 60,
          width: 60,
          margin: 13,
        }}>
        <Text
          style={{
            fontSize: 28,
            textAlign: 'center',
            textAlignVertical: 'center',
            color:getBtncolor(type)
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingVertical: 10,
        backgroundColor: darkTheme ? colors.dark : colors.light,
        alignItems: 'center',
      }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColors(colors.dark, colors.light)}
        trackColor={{true: colors.light2, false: colors.dark2}}
      />
      <Text
        style={{
          fontSize: 40,
          color: getColors(colors.dark, colors.light),
          width: '100%',
          textAlign: 'right',
          paddingRight: 20,
          marginTop:160,
          marginBottom:30
        }}>
        {result}
      </Text>

      <View
        style={{
          flex:1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          
          backgroundColor: getColors(colors.light1, colors.dark1),
          borderTopRightRadius:20,
          borderTopLeftRadius:20,
        }}>
        <Btn title={'C'} type={'top'}/>
        <Btn title={'DL'} type={'top'} />
        <Btn title={'/'} type={'top'}/>
        <Btn title={'%'} type={'top'}/>
        <Btn title={'7'} type={'number'}/>
        <Btn title={'8'} type={'number'}/>
        <Btn title={'9'} type={'number'}/>
        <Btn title={'*'} type={'right'}/>
        <Btn title={'4'} type={'number'}/>
        <Btn title={'5'} type={'number'}/>
        <Btn title={'6'} type={'number'}/>
        <Btn title={'-'} type={'right'}/>
        <Btn title={'1'} type={'number'}/>
        <Btn title={'2'} type={'number'}/>
        <Btn title={'3'} type={'number'}/>
        <Btn title={'+'} type={'right'}/>
        <Btn title={'00'} type={'number'}/>
        <Btn title={'0'} type={'number'}/>
        <Btn title={'.'} type={'number'}/>
        <Btn title={'='} type={'right'}/>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
