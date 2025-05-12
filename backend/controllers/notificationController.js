let notifications = [];

exports.getNotifications = (req, res) => {
  res.json(notifications);
};

exports.addNotification = (req, res) => {
  const { message, type } = req.body;
  const newNotif = { id: Date.now(), message, type };
  notifications.unshift(newNotif);
  res.status(201).json(newNotif);
};
