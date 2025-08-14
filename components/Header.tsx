import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { User } from '../types';

interface HeaderProps {
  user: User;
  onSettingsPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onSettingsPress }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.avatar}>{user.avatar}</Text>
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userRank}>🏅 Rank {user.rank}</Text>
        </View>
      </View>
      <Pressable style={styles.settingsButton} onPress={onSettingsPress}>
        <Text style={styles.settingsIcon}>⚙️</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    fontSize: 32,
    marginRight: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userRank: {
    fontSize: 14,
    color: '#666',
  },
  settingsButton: {
    padding: 8,
  },
  settingsIcon: {
    fontSize: 24,
  },
});
