// src/components/CustomerFeedback.js
import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

const feedbacks = [
  {
    id: 1,
    name: "Jenny Wilson",
    avatar: "",
    rating: 5,
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    id: 2,
    name: "Dianne Russell",
    avatar: "",
    rating: 4,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
  },
  {
    id: 3,
    name: "Devon Lane",
    avatar: "",
    rating: 3,
    feedback: "Normally wins a wins, but theirs are lean meatly and tender and",
  },
];

const CustomerFeedback = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Customer's Feedback</Typography>
      <List>
        {feedbacks.map((feedback) => (
          <ListItem key={feedback.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>{feedback.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={feedback.name}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {`Rating: ${feedback.rating} stars`}
                  </Typography>
                  <Typography>{feedback.feedback}</Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default CustomerFeedback;
