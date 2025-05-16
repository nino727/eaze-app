import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../Box';
import { Text } from '../Text';
import { Ionicons } from '@expo/vector-icons';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  label?: string;
  error?: string;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  options,
  placeholder = 'Select an option',
  label,
  error,
}) => {
  const theme = useTheme<Theme>();
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(option => option.value === value);

  return (
    <Box marginBottom="m">
      {label && (
        <Box marginBottom="xs">
          <Text variant="caption" color="textSecondary">
            {label}
          </Text>
        </Box>
      )}
      <TouchableOpacity
        onPress={() => setIsOpen(true)}
        style={[
          styles.select,
          {
            backgroundColor: theme.colors.gray100,
            borderColor: error ? theme.colors.error : theme.colors.gray200,
          },
        ]}
      >
        <Text
          variant="body"
          color={selectedOption ? 'text' : 'textSecondary'}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <Ionicons
          name="chevron-down"
          size={20}
          color={theme.colors.textSecondary}
        />
      </TouchableOpacity>
      {error && (
        <Box marginTop="xs">
          <Text variant="caption" color="error">
            {error}
          </Text>
        </Box>
      )}

      <Modal
        visible={isOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <Box
            style={[
              styles.modalContent,
              {
                backgroundColor: theme.colors.mainBackground,
              },
            ]}
          >
            <Box
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              padding="m"
              borderBottomWidth={1}
              borderBottomColor="gray200"
            >
              <Text variant="title" color="text">
                Select an option
              </Text>
              <TouchableOpacity onPress={() => setIsOpen(false)}>
                <Ionicons
                  name="close"
                  size={24}
                  color={theme.colors.text}
                />
              </TouchableOpacity>
            </Box>
            <FlatList
              data={options}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onValueChange(item.value);
                    setIsOpen(false);
                  }}
                  style={[
                    styles.option,
                    {
                      backgroundColor:
                        item.value === value
                          ? theme.colors.primary
                          : 'transparent',
                    },
                  ]}
                >
                  <Text
                    variant="body"
                    color={item.value === value ? 'mainBackground' : 'text'}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </Box>
        </TouchableOpacity>
      </Modal>
    </Box>
  );
};

const styles = StyleSheet.create({
  select: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '80%',
  },
  option: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
}); 