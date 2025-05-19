import { type ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// 导入实际页面组件
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';

// 临时占位组件
const TempPage = ({ title }: { title: string }): ReactNode => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>{title}</h1>
    <p>此页面尚未实现</p>
  </div>
);

// 使用临时组件替代尚未实现的页面
const LearningMaterialsPage = () => <TempPage title="学习材料" />;
const VocabularyPage = () => <TempPage title="词汇学习" />;
const SpeakingPage = () => <TempPage title="口语练习" />;
const ListeningPage = () => <TempPage title="听力训练" />;
const CommunityPage = () => <TempPage title="学习社区" />;

// 受保护的路由
const ProtectedRoute = ({ children }: { children: ReactNode }): ReactNode => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 公开路由 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* 受保护路由 */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        <Route path="/learning-materials" element={
          <ProtectedRoute>
            <LearningMaterialsPage />
          </ProtectedRoute>
        } />
        <Route path="/vocabulary" element={
          <ProtectedRoute>
            <VocabularyPage />
          </ProtectedRoute>
        } />
        <Route path="/speaking" element={
          <ProtectedRoute>
            <SpeakingPage />
          </ProtectedRoute>
        } />
        <Route path="/listening" element={
          <ProtectedRoute>
            <ListeningPage />
          </ProtectedRoute>
        } />
        <Route path="/community" element={
          <ProtectedRoute>
            <CommunityPage />
          </ProtectedRoute>
        } />
        
        {/* 404路由 */}
        <Route path="*" element={<TempPage title="404 - 页面不存在" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes; 