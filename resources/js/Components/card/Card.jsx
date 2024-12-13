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
        <Box sx={{ maxWidth: 170, margin: "4px auto", marginTop: 2 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ mt: 0.1 }} color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={onActionClick}
                        startIcon={icon}>
                        {actionText}
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}
