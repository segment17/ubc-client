tag=0.1.5
yarn &&
yarn build &&
docker build -t segment17hub/frontendservice:$tag . &&
docker push segment17hub/frontendservice:$tag &&
kubectl apply -f manifest.yaml &&
kubectl delete pod -l app=frontend-service
