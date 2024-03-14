import { useMutation, useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { deleteInquiry, getInquiryList } from '../../api/contact';
import { QUERY_KEY } from '../../constants/api';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa6';
import { formatDateTime } from '../../utils/format';
import { MdDeleteSweep } from 'react-icons/md';
import { InquiryList } from '../../types/contact';
import { queryClient } from '../../api/queryClient';

export const Inquiry = () => {
  const { data: inquiryList } = useQuery({
    queryKey: [QUERY_KEY.GET_INQUIRY_LIST],
    queryFn: getInquiryList,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteInquiry,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_INQUIRY_LIST] }),
  });

  const handleDelete = (inquiryId: number) => {
    if (confirm('정말 삭제할까요?')) {
      deleteMutation.mutate(inquiryId);
    }
  };

  return (
    <InquiryContainer>
      {inquiryList?.map((inquiry: InquiryList) => {
        return (
          <Accordion key={inquiry.id}>
            <AccordionSummary expandIcon={<FaAngleDown />} aria-controls="panel3-content" id="panel3-header">
              <div className="address">{inquiry.address}</div>
              <div className="name">{inquiry.name}</div>
              <div className="date">{formatDateTime(inquiry.created_at)}</div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <span>평수</span> {inquiry.py}평
              </div>
              <div>
                <span>예상 금액</span> {inquiry.budget}
              </div>
              <div>
                <span>연락처</span> {inquiry.phone}
              </div>
              <div>
                <span>질문 내용</span> {inquiry.question}
              </div>
            </AccordionDetails>
            <AccordionActions>
              <Button onClick={() => handleDelete(inquiry.id)}>
                <MdDeleteSweep />
              </Button>
            </AccordionActions>
          </Accordion>
        );
      })}
    </InquiryContainer>
  );
};

const InquiryContainer = styled.section`
  #panel3-header {
    font-size: 15px;
    display: flex;

    .name {
      padding: 0 12px;
    }

    .address {
      flex: 1;

      white-space: normal;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .date {
      color: ${(props) => props.theme.colors.gray};
      padding: 0 12px;
    }
  }

  .MuiAccordionDetails-root {
    font-size: 14px;
    & > div {
      padding: 4px 0;
    }
    span {
      font-family: Pretendard-Bold;
      color: ${(props) => props.theme.colors.darkGreen};
      margin-right: 6px;
    }
  }

  button {
    font-size: 24px;
    color: ${(props) => props.theme.colors.gray};

    &:hover {
      color: ${(props) => props.theme.colors.darkGreen};
    }
  }
`;
