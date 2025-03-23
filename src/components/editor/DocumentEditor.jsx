import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftIcon, 
  VideoCameraIcon, 
  ShareIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

function DocumentEditor() {
  const [content, setContent] = useState('');
  const [showCollaborators, setShowCollaborators] = useState(false);

  const collaborators = [
    { id: 1, name: 'John Doe', avatar: 'https://ui-avatars.com/api/?name=John+Doe' },
    { id: 2, name: 'Jane Smith', avatar: 'https://ui-avatars.com/api/?name=Jane+Smith' },
    { id: 3, name: 'Mike Johnson', avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson' },
  ];

  return (
    <div className="flex-grow flex">
      {/* Main Editor */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="Document Title"
                className="text-2xl font-semibold focus:outline-none"
                defaultValue="Untitled Document"
              />
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <ShareIcon className="h-5 w-5" />
                </button>
                <button 
                  className="p-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowCollaborators(!showCollaborators)}
                >
                  <UserGroupIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <textarea
              className="w-full h-full min-h-[500px] focus:outline-none resize-none"
              placeholder="Start typing..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ 
          width: showCollaborators ? 300 : 0,
          opacity: showCollaborators ? 1 : 0
        }}
        className="bg-gray-50 border-l overflow-hidden"
      >
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Collaborators</h3>
          <div className="space-y-4">
            {collaborators.map((collaborator) => (
              <div key={collaborator.id} className="flex items-center space-x-3">
                <img
                  src={collaborator.avatar}
                  alt={collaborator.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm text-gray-700">{collaborator.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="fixed bottom-4 right-4 flex space-x-2">
        <button className="p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700">
          <ChatBubbleLeftIcon className="h-6 w-6" />
        </button>
        <button className="p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700">
          <VideoCameraIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default DocumentEditor;