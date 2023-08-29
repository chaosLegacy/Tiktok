import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import AutocompleteInput from 'react-native-autocomplete-input';

import { Song } from '@/API';
import RowSong from '@/components/molecules/RowSong';
import { View } from '@/components/templates/Themed';
import { useDebounce } from '@/hooks/useDebounce';
import { useGetSongs } from '@/hooks/useSong';

export default function ModalScreen() {
  const [allSongs, setAllSongs] = useState<Song[]>([]);
  const [query, setQuery] = useState('');
  const debouncedValue = useDebounce(query, 500);

  const { data: songsList, loading } = useGetSongs(debouncedValue);

  useEffect(() => {
    if (songsList?.length) setAllSongs(songsList);
  }, [songsList]);

  const placeholder = loading ? 'Loading data...' : 'Enter a song name';

  return (
    <View style={styles.container}>
      <View style={styles.autocompleteContainer}>
        <AutocompleteInput
          // editable={!loading}
          autoCorrect={false}
          data={allSongs}
          value={query}
          onChangeText={setQuery}
          placeholder={placeholder}
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          flatListProps={{
            keyboardShouldPersistTaps: 'always',
            keyExtractor: (song: Song) => song.id,
            renderItem: ({ item }) => (
              <RowSong item={item} onSetQuery={setQuery} />
            ),
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    width: '100%',
  },
  containerStyle: {
    backgroundColor: '#ffffff',
  },
  inputContainerStyle: {
    borderWidth: 0,
    width: '100%',
    padding: 0,
    margin: 0,
  },
});
