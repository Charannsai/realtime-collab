import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', {
  autoConnect: false,
});

export const connectSocket = () => {
  socket.connect();
};

export const disconnectSocket = () => {
  socket.disconnect();
};

export const joinDocument = (documentId) => {
  socket.emit('joinDocument', documentId);
};

export const subscribeToDocumentUpdates = (callback) => {
  socket.on('receiveUpdate', callback);
};

export const emitDocumentUpdate = (documentId, title, content) => {
  socket.emit('documentUpdate', { documentId, title, content });
};

export default socket;
