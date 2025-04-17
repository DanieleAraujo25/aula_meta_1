// src/app/dashboard.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// TELA DASHBOARD
function DashboardScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [lastTrips, setLastTrips] = useState([
    { id: '1', destination: 'Paris', date: '2025-04-12' },
    { id: '2', destination: 'New York', date: '2025-03-30' },
    { id: '3', destination: 'Tokyo', date: '2025-03-25' },
  ]);

  const onSearchChange = (text: string) => setSearchTerm(text);
  const handleTripClick = (destination: string) =>
    Alert.alert('Viagem Selecionada', `Destino: ${destination}`);

  return (
    <View style={{ flex: 1 }}>
      {/* Barra de Pesquisa */}
      <View style={{ padding: 16, backgroundColor: '#fff' }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 8,
            paddingLeft: 8,
            marginBottom: 16,
          }}
          placeholder="Pesquise por destino"
          value={searchTerm}
          onChangeText={onSearchChange}
        />
      </View>

      {/* Últimas Viagens */}
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Últimas Viagens</Text>
        <FlatList
          data={lastTrips}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: '#f8f8f8',
                padding: 10,
                marginVertical: 8,
                borderRadius: 8,
              }}
              onPress={() => handleTripClick(item.destination)}
            >
              <Text style={{ fontSize: 16 }}>{item.destination}</Text>
              <Text style={{ color: '#777' }}>{item.date}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

    </View>
  );
}

// TELA MENSAGEM
function MessageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Tela de Mensagens</Text>
    </View>
  );
}

// TELA PERFIL
function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Tela de Perfil</Text>
    </View>
  );
}

// TABS
const Tab = createBottomTabNavigator();

export default function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: 'absolute', backgroundColor: '#007bff' },
        tabBarActiveTintColor: '#fff',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mensagem"
        component={MessageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="accout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}