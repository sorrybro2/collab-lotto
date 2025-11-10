/**
 * 백엔드 API와 통신하는 서비스 레이어
 */

const API_BASE_URL = '/api';

/**
 * 자동차 경주 게임 시작 요청
 * @param {string[]} carNames - 자동차 이름 배열
 * @param {number} roundCount - 시도 횟수
 * @returns {Promise<Object>} 게임 결과 데이터
 */
export const startRacing = async (carNames, roundCount) => {
  try {
    const response = await fetch(`${API_BASE_URL}/racing/start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        carNames,
        roundCount: Number(roundCount),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '게임 시작에 실패했습니다.');
    }

    return await response.json();
  } catch (error) {
    console.error('Racing API Error:', error);
    throw error;
  }
};

/**
 * 게임 진행 상황 조회 (필요시 사용)
 * @param {string} gameId - 게임 ID
 * @returns {Promise<Object>} 게임 진행 상황
 */
export const getRacingStatus = async (gameId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/racing/${gameId}`);
    
    if (!response.ok) {
      throw new Error('게임 상태 조회에 실패했습니다.');
    }

    return await response.json();
  } catch (error) {
    console.error('Racing Status API Error:', error);
    throw error;
  }
};


