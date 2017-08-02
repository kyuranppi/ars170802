export const data = [
  {
    name: 'Hotels.com',
    home: {
      message: '안녕하세요. Hotels.com입니다.',
      choices: {
        1: {
          description: '한국어 지원을 원하시면 1번을 선택해 주십시오.',
          message: '다음을 선택하세요',
          choices: {
            1: {
              description: '기존 예약에 대한 문의는 1번',
              choices: {
                1: {
                  description: '예약 상태를 확인하거나 여행일정을 이메일로 보내거나 호텔과 관련해 문의',
                  message: '핸드폰 번호나 예약번호를 입력해주세요'
                },
                2: {
                  description: '예약 변경',
                  message: '핸드폰 번호나 예약번호를 입력해주세요'
                },
                3: {
                  description: '예약 취소',
                  message: '핸드폰 번호나 예약번호를 입력해주세요'
                },
                4: {
                  description: '환불상태 확인',
                  message: '핸드폰 번호나 예약번호를 입력해주세요'
                },
                5: {
                  description: 'Hotels.com 리워드에 대한 정보 및 문의',
                  message: '지금 고객님의 통화를 저희 여행 전문가에 연결하고 있습니다 통화 내용 녹음 됨'
                },
                6: {
                  description: '기타 모든 문의',
                  message: '핸드폰 번호나 예약번호를 입력해주세요'
                },
                8: { description: '다시 듣기' }
              }
            },

            2: {
              description: '새로 예약하시려면 2번',
              choices: { 
                1: {
                  description: '국내호텔',
                  message: '지금 고객님의 통화를 저희 여행 전문가에 연결하고 있습니다 통화 내용 녹음 됨',
                },
                2: {
                  description: '해외호텔',
                  message : '지금 고객님의 통화를 저희 여행 전문가에 연결하고 있습니다 통화 내용 녹음 됨'
                }, 
              }
            }
          }
        },
        // 2: { For English press 2},
      }
    }
  },
]