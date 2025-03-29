import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  PlusIcon,
  FolderIcon,
  ClockIcon,
  UserGroupIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

function Dashboard() {
  const [documents] = useState([
    { id: 1, title: 'Project Proposal', lastEdited: '2 hours ago', collaborators: 3, type: 'document' },
    { id: 2, title: 'Meeting Notes', lastEdited: '1 day ago', collaborators: 5, type: 'document' },
    { id: 3, title: 'Marketing Strategy', lastEdited: '3 days ago', collaborators: 4, type: 'document' },
    { id: 4, title: 'Q1 Reports', lastEdited: '1 week ago', collaborators: 2, type: 'folder' },
    { id: 5, title: 'Design Assets', lastEdited: '2 weeks ago', collaborators: 6, type: 'folder' },
  ]);

  return (
    <div className="flex-grow bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <h1 className="text-2xl font-bold text-gray-900">My Workspace</h1>
          <div className="flex space-x-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors flex items-center space-x-2">
              <PlusIcon className="h-5 w-5" />
              <span>New</span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <FolderIcon className="h-6 w-6 text-primary-500" />
              <h3 className="text-lg font-medium text-gray-900">12 Documents</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <UserGroupIcon className="h-6 w-6 text-primary-500" />
              <h3 className="text-lg font-medium text-gray-900">8 Collaborators</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <ClockIcon className="h-6 w-6 text-primary-500" />
              <h3 className="text-lg font-medium text-gray-900">Last edited 2h ago</h3>
            </div>
          </motion.div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <Link to={`/document/${doc.id}`} className="block">
                <div className="flex items-center space-x-3 mb-4">
                  {doc.type === 'folder' ? (
                    <FolderIcon className="h-6 w-6 text-primary-500" />
                  ) : (
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  <h3 className="text-lg font-medium text-gray-900">{doc.title}</h3>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {doc.lastEdited}
                  </span>
                  <span className="flex items-center">
                    <UserGroupIcon className="h-4 w-4 mr-1" />
                    {doc.collaborators}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;