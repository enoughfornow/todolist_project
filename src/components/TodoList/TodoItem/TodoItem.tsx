import React from 'react';
import { Stack, Box, IconButton, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo } from '../../../App';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        marginTop: '15px',
        width: '100%',
        padding: '20px 28px',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        gap: 1,
      }}>
      <Box textAlign="left">
        <Typography
          sx={{ cursor: 'pointer', textDecorationLine: todo.checked ? 'line-through' : 'none' }}
          variant="h5"
          component="h4"
          gutterBottom>
          {todo.name}
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          {todo.description}
        </Typography>
      </Box>

      <Box>
        <IconButton color="error" area-label="delete">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};
