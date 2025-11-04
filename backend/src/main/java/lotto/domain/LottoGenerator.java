package lotto.domain;

import java.util.*;

public class LottoGenerator {

    private static final int LOTTO_SIZE = 6;
    private static final int FIRST_LOTTO_NUMBER_RANGE = 1;
    private static final int LAST_LOTTO_NUMBER_RANGE = 45;

    public List<Integer> generate() {
        Set<Integer> numbers = new HashSet<>();
        Random random = new Random();
        while (numbers.size() < LOTTO_SIZE) {
            int n = random.nextInt(LAST_LOTTO_NUMBER_RANGE - FIRST_LOTTO_NUMBER_RANGE + 1) + FIRST_LOTTO_NUMBER_RANGE;
            numbers.add(n);
        }
        return new ArrayList<>(numbers);
    }
}
