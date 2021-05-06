for f in "./../ubc-client/src/requests_pb"/*.js
do
    echo '/* eslint-disable */' | cat - "${f}" > temp && mv temp "${f}"
done