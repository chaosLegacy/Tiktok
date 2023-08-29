import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

import { Song } from '@/API';
import { Button } from '@/components/atoms/Button';
import { Text } from '@/components/atoms/Text';
import { View } from '@/components/templates/Themed';
import Colors from '@/constants/Colors';

type RowSongProps = {
  item: Song;
  onSetQuery: (name: string) => void;
};
const RowSong = ({ item, onSetQuery }: RowSongProps) => {
  const [playSong, setPlaySong] = useState<boolean>(false);
  const onPlaySong = () => {
    setPlaySong(!playSong);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => onSetQuery(item.name)}>
        <Text style={styles.itemText}>
          {item.artist} {item.name}
        </Text>
        <Button
          style={styles.button}
          childrenPosition="center"
          onPress={onPlaySong}>
          <Ionicons
            name={playSong ? 'md-play' : 'md-pause'}
            size={20}
            color={Colors.dark.primary.background}
          />
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default RowSong;
