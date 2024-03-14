import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Carousel } from '../components/admin/Carousel';
import { Post } from '../components/admin/Post';
import { Inquiry } from '../components/admin/Inquiry';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const Admin = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <PageLayout>
      <AdminContainer>
        <h2>관리자 페이지</h2>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="캐러셀 관리" sx={{ fontFamily: 'Pretendard-SemiBold', fontSize: '16px' }} />
              <Tab label="게시물 관리" sx={{ fontFamily: 'Pretendard-SemiBold', fontSize: '16px' }} />
              <Tab label="문의글" sx={{ fontFamily: 'Pretendard-SemiBold', fontSize: '16px' }} />
              <Tab label="비밀번호 변경" sx={{ fontFamily: 'Pretendard-SemiBold', fontSize: '16px' }} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Carousel />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Post />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Inquiry />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <div>비밀번호 변경쓰</div>
          </CustomTabPanel>
        </Box>
      </AdminContainer>
    </PageLayout>
  );
};

const AdminContainer = styled.section`
  h2 {
    font-size: 24px;
    margin-top: 64px;
    text-align: center;
  }

  .MuiBox-root {
    margin-top: 24px;
  }
`;
