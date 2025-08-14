import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Friend } from '../types';
import { commonStyles } from '../styles';

interface FriendsListProps {
  friends: Friend[];
  onTradeCards: (friendId: string) => void;
}

export const FriendsList: React.FC<FriendsListProps> = ({ friends, onTradeCards }) => {
  return (
    <View style={commonStyles.section}>
      <Text style={commonStyles.sectionTitle}>👥 Friends & Sharing</Text>
      {friends.map((friend) => (
        <View key={friend.id} style={styles.friendItem}>
          <View style={styles.friendInfo}>
            <Text style={styles.friendAvatar}>{friend.avatar}</Text>
            <Text style={styles.friendName}>{friend.name}</Text>
            <Text style={styles.friendRank}>🏆 Rank {friend.rank}</Text>
          </View>
          <Pressable
            style={styles.tradeButton}
            onPress={() => onTradeCards(friend.id)}
          >
            <Text style={styles.tradeButtonText}>+ Trade Cards</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  friendInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  friendAvatar: {
    fontSize: 24,
    marginRight: 12,
  },
  friendName: {
    fontSize: 16,
    color: '#333',
    marginRight: 12,
  },
  friendRank: {
    fontSize: 14,
    color: '#666',
  },
  tradeButton: {
    backgroundColor: '#34C759',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tradeButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
