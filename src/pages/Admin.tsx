import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const Admin = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <PageLayout>
      <AdminContainer>
        <h2>관리자 페이지</h2>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="메인페이지 수정" />
              <Tab label="게시글 등록" />
              <Tab label="문의글" />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            메인페이지 수정
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            게시글 등록
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            문의글
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
`;
