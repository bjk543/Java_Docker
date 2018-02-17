
# folder="/Volumes/Disk_E/DocE/workspace/Bworkspace/Java_Docker"
# port=""mongo-api" "mongo-db" "sync-geth" "geth" "
# ## now loop through the above array
# for i in $port
# do
#    #lsof -n -i:$i | grep LISTEN
#    cd $folder/$i ; npm install ;nohup docker-compose -f docker-compose.yml up --build > log.txt &
#    #sudo netstat -tulpn | grep $i
#    # or do whatever with individual element of the array
# done

rm $folder/*.txt
folder="/Volumes/Disk_E/DocE/workspace/Bworkspace/Java_Docker/logs"
docker stop $(docker ps -q)
pkill geth
sleep 1
cd /Volumes/Disk_E/DocE/workspace/Bworkspace/Java_Docker/mongo-db;npm install && nohup docker-compose -f docker-compose.yml up --build > $folder/mongo-db.txt &
cd /Volumes/Disk_E/DocE/workspace/Bworkspace/Java_Docker/mongo-api;npm install && nohup docker-compose -f docker-compose.yml up --build > $folder/mongo-api.txt &
sleep 6
cd /Volumes/Disk_E/DocE/workspace/Bworkspace/Java_Docker/sync-geth;nohup docker-compose -f docker-compose.yml up --build > $folder/sync-geth.txt &
cd /Volumes/Disk_E/DocE/workspace/Bworkspace/Java_Docker/java-api;nohup docker-compose -f docker-compose.yml up --build > $folder/java-api.txt &
cd /Volumes/Disk_E/DocE/workspace/Bworkspace/Java_Docker/java;nohup docker-compose -f docker-compose.yml up --build > $folder/java.txt &
#cd /Volumes/Disk_E/DocE/workspace/Bworkspace/Java_Docker/myside;nohup docker-compose -f docker-compose.yml up --build > $folder/myside.txt &

#cd /Volumes/Disk_E/DocE/workspace/Bworkspace/Java_Docker/geth;nohup docker-compose -f docker-compose.yml up --build > $folder/geth.txt &
