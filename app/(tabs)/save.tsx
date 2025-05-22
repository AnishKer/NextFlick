import { icons } from "@/constants/icons";
import { View, Text, Image, FlatList, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const mockSavedMovies = [
  { id: '1', title: 'Inception', poster: 'https://image.tmdb.org/t/p/w200/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
  { id: '2', title: 'Interstellar', poster: 'https://image.tmdb.org/t/p/w200/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg' },
  { id: '3', title: 'The Dark Knight', poster: 'https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
];

const Save = () => {
  const [saved, setSaved] = useState(mockSavedMovies);

  const removeMovie = (id: string) => {
    setSaved(saved.filter((movie) => movie.id !== id));
    Alert.alert('Removed from saved movies');
  };

  return (
    <SafeAreaView className="bg-primary flex-1 px-6">
      <View className="flex-1 pt-6">
        <Text className="text-white text-xl font-bold mb-4">Saved Movies</Text>
        {saved.length === 0 ? (
          <Text className="text-gray-400 text-center mt-10">No movies saved yet.</Text>
        ) : (
          <FlatList
            data={saved}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 18, backgroundColor: '#23223a', borderRadius: 10, padding: 10 }}>
                <Image source={{ uri: item.poster }} style={{ width: 48, height: 72, borderRadius: 6, marginRight: 14 }} />
                <Text style={{ color: '#fff', fontSize: 16, flex: 1 }}>{item.title}</Text>
                <TouchableOpacity onPress={() => removeMovie(item.id)}>
                  <Text style={{ color: '#ff7675', fontWeight: 'bold' }}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Save;
