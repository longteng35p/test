import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameStats } from '../types';
import { commonStyles } from '../styles';

interface GameSummaryProps {
  gameStats: GameStats;
}

export const GameSummary: React.FC<GameSummaryProps> = ({ gameStats }) => {
  return (
    <View style={commonStyles.section}>
      <Text style={commonStyles.sectionTitle}>🎮 Game Summary</Text>
      <View style={styles.gameStats}>
        <View style={styles.statRow}>
          <Text style={styles.statText}>Coins: 💰 {gameStats.coins}</Text>
          <Text style={styles.statText}>Chips: 🪙 {gameStats.chips}</Text>
        </View>
        <Text style={styles.statText}>
          Card Effects: {gameStats.cardEffects.join(', ')}
        </Text>
        <Text style={styles.statText}>
          Pack Drop: 🃏 "{gameStats.availablePacks[0]}" in shop
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameStats: {
    gap: 8,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statText: {
    fontSize: 14,
    color: '#333',
  },
});
