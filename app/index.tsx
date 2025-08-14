import React, { useState } from 'react';
import { ScrollView, Pressable, Alert, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Types and Components
import { Task, User, Friend, GameStats, ViewType, NewTaskForm } from '../types';
import {
  Header,
  ViewToggle,
  TaskList,
  GameSummary,
  FriendsList,
  AddTaskModal,
} from '../components';
import { commonStyles } from '../styles';

export default function Index() {
  const [currentView, setCurrentView] = useState<ViewType>('today');
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Morning workout',
      completed: false,
      startTime: '10:00',
      endTime: '11:00',
      isRecurring: true,
      isFlexible: false,
    },
    {
      id: '2',
      title: 'Review project proposal',
      completed: false,
      isRecurring: false,
      isFlexible: true,
    },
    {
      id: '3',
      title: 'Team standup',
      completed: true,
      startTime: '09:00',
      endTime: '09:30',
      isRecurring: true,
      isFlexible: false,
    },
  ]);

  const [user] = useState<User>({
    name: 'Player',
    avatar: '👤',
    rank: 5,
    coins: 320,
    chips: 5,
  });

  const [gameStats] = useState<GameStats>({
    coins: 320,
    chips: 5,
    cardEffects: ['+25% Daily Bonus', 'Streak Multiplier x2'],
    availablePacks: ['Epic Pack', 'Rare Pack'],
  });

  const [friends] = useState<Friend[]>([
    { id: '1', name: 'Bob', rank: 3, avatar: '👨' },
    { id: '2', name: 'Alice', rank: 7, avatar: '👩' },
  ]);

  // New task form state
  const [newTask, setNewTask] = useState<NewTaskForm>({
    title: '',
    startTime: '',
    endTime: '',
    isRecurring: false,
    isFlexible: true,
    notes: '',
  });

  // Event handlers
  const handleToggleTask = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    ));

    // TODO: API call to update task completion
    // TODO: Award coins for task completion
    // TODO: Check for streak bonuses
  };

  const handleAddTask = () => {
    if (!newTask.title.trim()) {
      Alert.alert('Error', 'Please enter a task title');
      return;
    }

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      completed: false,
      startTime: newTask.startTime || undefined,
      endTime: newTask.endTime || undefined,
      isRecurring: newTask.isRecurring,
      isFlexible: newTask.isFlexible,
      notes: newTask.notes || undefined,
    };

    setTasks([...tasks, task]);
    setNewTask({
      title: '',
      startTime: '',
      endTime: '',
      isRecurring: false,
      isFlexible: true,
      notes: '',
    });
    setShowAddTaskModal(false);

    // TODO: API call to create task
  };

  const handleUpdateNewTask = (updates: Partial<NewTaskForm>) => {
    setNewTask({ ...newTask, ...updates });
  };

  const handleSettingsPress = () => {
    // TODO: Navigate to settings screen
    Alert.alert('Settings', 'Settings screen coming soon!');
  };

  const handleTradeCards = (friendId: string) => {
    // TODO: Navigate to card trading screen
    Alert.alert('Trade Cards', `Trading cards with friend ${friendId}`);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView style={commonStyles.scrollView}>
        <Header user={user} onSettingsPress={handleSettingsPress} />

        <ViewToggle currentView={currentView} onViewChange={setCurrentView} />

        <TaskList tasks={tasks} onToggleTask={handleToggleTask} />

        <Pressable
          style={commonStyles.button}
          onPress={() => setShowAddTaskModal(true)}
        >
          <Text style={commonStyles.buttonText}>➕ Add Task</Text>
        </Pressable>

        <GameSummary gameStats={gameStats} />

        <FriendsList friends={friends} onTradeCards={handleTradeCards} />
      </ScrollView>

      <AddTaskModal
        visible={showAddTaskModal}
        newTask={newTask}
        onClose={() => setShowAddTaskModal(false)}
        onSave={handleAddTask}
        onUpdateTask={handleUpdateNewTask}
      />
    </SafeAreaView>
  );
}


