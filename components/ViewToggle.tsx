import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ViewType } from '../types';

interface ViewToggleProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void; // TODO: implement calendar view
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onViewChange }) => {
  return (
    <View style={styles.viewToggle}>
      <Pressable
        style={[styles.toggleButton, currentView === 'today' && styles.activeToggle]}
        onPress={() => onViewChange('today')}
      >
        <Text style={[styles.toggleText, currentView === 'today' && styles.activeToggleText]}>
          Today View
        </Text>
      </Pressable>
      <Pressable
        style={[styles.toggleButton, currentView === 'calendar' && styles.activeToggle]}
        onPress={() => onViewChange('calendar')}
      >
        <Text style={[styles.toggleText, currentView === 'calendar' && styles.activeToggleText]}>
          Calendar 📅
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  viewToggle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  toggleButton: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  activeToggle: {
    backgroundColor: '#007AFF',
  },
  toggleText: {
    fontSize: 16,
    color: '#333',
  },
  activeToggleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
