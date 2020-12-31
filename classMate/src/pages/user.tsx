import React, { useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { ToggleButton } from 'react-native-paper/lib/typescript/components/ToggleButton/ToggleButton';
import UserStyle from '../styles/userStyles';

const User: React.FC = () => {
  const [nome, setNome] = useState("")
  const [sobreNome, setSobrenome] = useState("")
  const [email, setEmail] = useState("")
  const [foto, setFoto] = useState("")
  const [dataNascimento, setData] = useState("")
  const [telefone, setTelefone] = useState("")
  const [Editar, setEditar] = useState(true)

  function editar() {

  }

  return (
    <View style={UserStyle.container}>
      <Image style={UserStyle.image} source={require('../images/logo.png')}>
      </Image>
      <View style={UserStyle.boxInput}>
        <TextInput style={UserStyle.input}
          placeholderTextColor="black"
          placeholder="nome"
          value={nome}
          disabled={Editar}
          onChangeText={nome => setNome(nome)}>
        </TextInput>
        <TextInput style={UserStyle.input}
          placeholderTextColor="black"
          value={sobreNome}
          placeholder="sobrenome"
          disabled={Editar}
          onChangeText={sobreNome => setSobrenome(sobreNome)}>
        </TextInput>
        <TextInput style={UserStyle.input}
          placeholderTextColor="black"
          placeholder="email"
          value={email}
          disabled={Editar}
          onChangeText={email => setEmail(email)}>
        </TextInput>
        <TextInput style={UserStyle.input}
          placeholderTextColor="black"
          placeholder="26/06/1998"
          value={dataNascimento}
          disabled={Editar}
          onChangeText={dataNascimento => setData(dataNascimento)}>
        </TextInput>
        <TextInput style={UserStyle.input}
          placeholderTextColor="black"
          placeholder="9999999"
          value={telefone}
          disabled={Editar}
          onChangeText={telefone => setTelefone(telefone)}>
        </TextInput>

      </View>
      <View style={UserStyle.boxButton}>
      <RectButton  style={UserStyle.Button} onPress={() => editar()}>
        <Text style={UserStyle.textButton}>Editar</Text>
      </RectButton>
      <RectButton style={UserStyle.Button} onPress={() => editar()}>
        <Text style={UserStyle.textButton}>Excluir</Text>
      </RectButton>
      </View>
    </View>

  );
}

export default User;