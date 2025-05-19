import { useState } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  Avatar, 
  Button, 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  Link, 
  Grid, 
  Box, 
  Typography, 
  Container, 
  Alert 
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Layout from '../components/Layout';
import api from '../services/api';

interface LocationState {
  message?: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(state?.message || null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'remember' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setError(null);
    setLoading(true);
    
    try {
      // 注意：这是模拟API调用，真实环境需要连接后端API
      // const response = await api.post('/login', {
      //   email: formData.email,
      //   password: formData.password,
      // });
      
      // 模拟成功响应
      console.log('登录成功，用户数据:', formData);
      
      // 模拟存储token
      localStorage.setItem('token', 'demo-token-' + Date.now());
      
      // 跳转到仪表盘
      navigate('/dashboard');
    } catch (err: any) {
      console.error('登录失败:', err);
      setError(err.response?.data?.message || '登录失败，请检查您的邮箱和密码');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            用户登录
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
              {error}
            </Alert>
          )}
          
          {success && (
            <Alert severity="success" sx={{ mt: 2, width: '100%' }}>
              {success}
            </Alert>
          )}
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="电子邮箱"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="密码"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
            />
            <FormControlLabel
              control={
                <Checkbox 
                  name="remember" 
                  color="primary"
                  checked={formData.remember}
                  onChange={handleChange}
                />
              }
              label="记住我"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? '登录中...' : '登录'}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component={RouterLink} to="#" variant="body2">
                  忘记密码？
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/register" variant="body2">
                  {"没有账号？立即注册"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default LoginPage; 