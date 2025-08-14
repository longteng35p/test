import React from 'react';
import { View, Text } from 'react-native';
import { Task } from '../types';
import { TaskItem } from './TaskItem';
import { commonStyles } from '../styles';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
  return (
    <View style={commonStyles.section}>
      <Text style={commonStyles.sectionTitle}>📋 To-Do List</Text>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
        />
      ))}
    </View>
  );
};
