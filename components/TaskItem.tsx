import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: string) => void; // TODO: api call to update task completion
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle }) => {
  const getTaskTimeDisplay = (task: Task) => {
    if (task.startTime && task.endTime) {
      return `⏰ ${task.startTime} – ${task.endTime}`;
    }
    if (task.isRecurring) {
      return '🔁 Daily';
    }
    if (task.isFlexible) {
      return '⏳ Flexible';
    }
    return '';
  };

  return (
    <Pressable
      style={styles.taskItem}
      onPress={() => onToggle(task.id)}
    >
      <Text style={styles.taskCheckbox}>
        {task.completed ? '✅' : '☐'}
      </Text>
      <View style={styles.taskContent}>
        <Text style={[styles.taskTitle, task.completed && styles.completedTask]}>
          {task.title}
        </Text>
        <Text style={styles.taskTime}>
          {getTaskTimeDisplay(task)}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  taskCheckbox: {
    fontSize: 20,
    marginRight: 12,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  taskTime: {
    fontSize: 14,
    color: '#666',
  },
});
