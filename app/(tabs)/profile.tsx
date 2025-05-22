import { icons } from "@/constants/icons";
import { View, Text, Image, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const mockUser = {
  name: "Jane Doe",
  email: "jane.doe@email.com",
  avatar: icons.person,
};

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(mockUser);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    setUser({ ...user, name, email });
    setEditMode(false);
    Alert.alert("Profile updated!");
  };

  return (
    <SafeAreaView className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={user.avatar} className="size-20 mb-2" tintColor="#fff" />
        {editMode ? (
          <>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Name"
              style={{ color: '#fff', backgroundColor: '#22223b', borderRadius: 8, padding: 8, width: 200, marginBottom: 10 }}
              placeholderTextColor="#aaa"
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              style={{ color: '#fff', backgroundColor: '#22223b', borderRadius: 8, padding: 8, width: 200, marginBottom: 10 }}
              placeholderTextColor="#aaa"
              keyboardType="email-address"
            />
            <Button title="Save" onPress={handleSave} />
            <TouchableOpacity onPress={() => setEditMode(false)} style={{ marginTop: 10 }}>
              <Text style={{ color: '#aaa' }}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text className="text-white text-xl font-bold">{user.name}</Text>
            <Text className="text-gray-400 text-base mb-2">{user.email}</Text>
            <Button title="Edit Profile" onPress={() => setEditMode(true)} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
