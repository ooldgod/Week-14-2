import React, { useState } from 'react';
import EditTaskPopup from '../modals/EditTask';
import { Card as MUICard, CardContent, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const colors = {
        Work: {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        Personal: {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        Study: {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        Exercise: {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        Hobby: {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    };

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index);
    }

    const handleDelete = () => {
        deleteTask(index);
    }

    const handleCheckboxChange = () => {
        deleteTask(index);
    }

    return (
        <MUICard style={{ backgroundColor: colors[taskObj.Category]?.secondaryColor || "#FFFFFF", marginBottom: '20px' }}>
            <div style={{ backgroundColor: colors[taskObj.Category]?.primaryColor || "#FFFFFF", height: "5px" }}></div>
            <CardContent>
                <Typography variant="h5" component="div" style={{ textDecoration: taskObj.Completed ? 'line-through' : 'none' }}>
                    {taskObj.Name}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ textDecoration: taskObj.Completed ? 'line-through' : 'none' }}>
                    {taskObj.Description}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ textDecoration: taskObj.Completed ? 'line-through' : 'none' }}>
                    Deadline: {new Date(taskObj.Deadline).toLocaleDateString()}
                </Typography>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={taskObj.Completed || false}
                            onChange={handleCheckboxChange}
                            name="completed"
                            color="primary"
                        />
                    }
                    label="Completed"
                />
                <Button size="small" onClick={toggle}>Edit</Button>
                <Button size="small" onClick={handleDelete}>Delete</Button>
            </CardContent>
            <EditTaskPopup modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </MUICard>
    );
};

export default Card;
