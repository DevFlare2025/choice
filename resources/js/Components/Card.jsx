import React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { IconButton } from "@mui/material" // Si deseas usar botones de íconos
import HomeIcon from "@mui/icons-material/Home" // Ejemplo de ícono de Material UI

export default function MiCard({
    title,
    description,
    actionText,
    onActionClick,
    icon,
}) {
    return (
        <Box sx={{ maxWidth: 345, margin: "auto", marginTop: 2 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ mt: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        onClick={onActionClick}
                        startIcon={icon}>
                        {actionText}
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}
