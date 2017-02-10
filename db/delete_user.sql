UPDATE vehicles
SET owners = null
WHERE vehicleid=$2 AND owners= $1;
