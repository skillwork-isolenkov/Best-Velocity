function trackVelocity(sprints) {
    if (sprints.length < 3) {
        console.log('error');
        return;
    }

    let sequences_summations = [];
    let temp_sequence_sum = 0;

    let i = 0;
    while (i < sprints.length) {
        temp_sequence_sum += sprints[i];

        if (i === 2) {
            sequences_summations.push(temp_sequence_sum);

            temp_sequence_sum = 0;
            sprints.shift();
            i = -1;
        }
        i++;
    }

    let best_velocity_result = sequences_summations.sort((a, b) => a - b).reverse()[0];
    console.log(`{sum: ${best_velocity_result}}`);
}

trackVelocity([76, 80, 81, 77, 83, 78, 80]);