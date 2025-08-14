import React from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NewTaskForm } from '../types';
import { commonStyles } from '../styles';

interface AddTaskModalProps {
  visible: boolean;
  newTask: NewTaskForm;
  onClose: () => void;
  onSave: () => void; // TODO: api call to insert task
  onUpdateTask: (updates: Partial<NewTaskForm>) => void;
}

export const AddTaskModal: React.FC<AddTaskModalProps> = ({
  visible,
  newTask,
  onClose,
  onSave,
  onUpdateTask,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <SafeAreaView style={commonStyles.modalContainer}>
        <View style={commonStyles.modalHeader}>
          <Pressable onPress={onClose}>
            <Text style={commonStyles.modalCloseButton}>Cancel</Text>
          </Pressable>
          <Text style={commonStyles.modalTitle}>Add New Task</Text>
          <Pressable onPress={onSave}>
            <Text style={commonStyles.modalSaveButton}>Save</Text>
          </Pressable>
        </View>

        <ScrollView style={commonStyles.modalContent}>
          <View style={commonStyles.inputGroup}>
            <Text style={commonStyles.inputLabel}>Task Title *</Text>
            <TextInput
              style={commonStyles.textInput}
              value={newTask.title}
              onChangeText={(text) => onUpdateTask({ title: text })}
              placeholder="Enter task title"
              placeholderTextColor="#999"
            />
          </View>

          <View style={commonStyles.inputGroup}>
            <Text style={commonStyles.inputLabel}>Start Time</Text>
            <TextInput
              style={commonStyles.textInput}
              value={newTask.startTime}
              onChangeText={(text) => onUpdateTask({ startTime: text })}
              placeholder="e.g., 10:00"
              placeholderTextColor="#999"
            />
          </View>

          <View style={commonStyles.inputGroup}>
            <Text style={commonStyles.inputLabel}>End Time</Text>
            <TextInput
              style={commonStyles.textInput}
              value={newTask.endTime}
              onChangeText={(text) => onUpdateTask({ endTime: text })}
              placeholder="e.g., 11:00"
              placeholderTextColor="#999"
            />
          </View>

          <View style={commonStyles.switchGroup}>
            <Text style={commonStyles.inputLabel}>Recurring Daily</Text>
            <Switch
              value={newTask.isRecurring}
              onValueChange={(value) => onUpdateTask({ isRecurring: value })}
            />
          </View>

          <View style={commonStyles.switchGroup}>
            <Text style={commonStyles.inputLabel}>Flexible Timing</Text>
            <Switch
              value={newTask.isFlexible}
              onValueChange={(value) => onUpdateTask({ isFlexible: value })}
            />
          </View>

          <View style={commonStyles.inputGroup}>
            <Text style={commonStyles.inputLabel}>Notes</Text>
            <TextInput
              style={[commonStyles.textInput, commonStyles.textArea]}
              value={newTask.notes}
              onChangeText={(text) => onUpdateTask({ notes: text })}
              placeholder="Add any notes or insights"
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
